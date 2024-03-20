// app/api/post/route.ts
import postgres from '@/app/utils/postgres';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const client = await postgres.connect();


        const { productName, itemCode: rawItemCode, quantity: rawQuantity } = await request.json();
        const quantity = rawQuantity ? parseInt(rawQuantity) : null;

        if (!productName || !rawItemCode || !quantity || quantity < 0) {
            return NextResponse.json({ error: 'Please provide all required fields' }, { status: 400 });
        };

        const count = await client.query(`SELECT COUNT(*) FROM item WHERE code LIKE $1`, [`${rawItemCode}%`]);
        const itemCount = parseInt(count.rows[0].count);
        const itemCode = `${rawItemCode}${(itemCount + 1).toString().padStart(4, '0')}`;

        console.log(itemCode)

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
        const itemCode = searchParams.get('itemCode') || '';

        let result;
        if (itemCode) {
            result = await client.query(`SELECT * FROM item WHERE code LIKE $1`, [`${itemCode}%`]);
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