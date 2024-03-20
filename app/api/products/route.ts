// app/api/post/route.ts
import postgres from '@/app/utils/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const client = await postgres.connect();

        const { productName, itemCode, quantity: rawQuantity } = await request.json();
        const quantity = rawQuantity ? parseInt(rawQuantity) : null;

        if (!productName || !itemCode || !quantity || quantity < 0) {
            return NextResponse.json({ error: 'Please provide all required fields' }, { status: 400 });
        }
        const result = await client.query(
            `INSERT INTO item (code, name, quantity) VALUES ($1, $2, $3) RETURNING *`,
            [itemCode, productName, quantity]
        );

        client.release();
        return NextResponse.json(result, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}


export async function GET(request: NextRequest) {
    try {
        const client = await postgres.connect();

        const searchParams = request.nextUrl.searchParams;
        const realItemCode = searchParams.get('itemCode') || '';
        const itemCode = realItemCode ? realItemCode.replace(/[^a-zA-Z]/g, '') : '';
        const id = parseInt(realItemCode.replace(/[^0-9]/g, '') || '');

        let result;
        if (itemCode) {
            result = await client.query(`SELECT * FROM item WHERE code = '${itemCode}' and id = ${id}`);
        } else {
            result = await client.query('SELECT * FROM item');
        }

        client.release();
        return NextResponse.json(result.rows, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}