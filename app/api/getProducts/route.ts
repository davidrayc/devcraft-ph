// app/api/post/route.ts
import postgres from '@/app/utils/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

    try {
        const client = await postgres.connect();

        const searchParams = request.nextUrl.searchParams;
        const productName = searchParams.get('productName');
        const itemCode = searchParams.get('itemCode');
        const rawQuantity = searchParams.get('quantity');
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

        // console.log(realItemCode);
        // console.log(itemCode);
        // console.log(id);

        const result = itemCode ? await client.query(`SELECT * FROM item WHERE code = '${itemCode}' and id = ${id}`) : await client.query('SELECT * FROM item');
        client.release();
        return NextResponse.json(result.rows, { status: 200 });
    }
    catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}