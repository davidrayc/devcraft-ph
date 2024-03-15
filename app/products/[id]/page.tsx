import ProductDetails from '../../components/Product/ProductDetails'
import ProductAuditTrailListItem from '../../components/Product/ProductAuditTrailListItem'

type AuditTrailListItem = {
  id: number;
  description: string;
}

type Product = {
  id: number;
  name: string;
  itemCode: string;
  quantity: number;
  auditTrailListItems: AuditTrailListItem[];
}

export default function ProductPage() {
  const dummyProduct: Product = {
    id: 0,
    name: "Product Name",
    itemCode: "_item_code",
    quantity: 0,
    auditTrailListItems: [
      {
        id: 0,
        description: "User A decreased the quantity of product A"
      },
      {
        id: 1,
        description: "User B decreased the quantity of product A"
      },
      {
        id: 2,
        description: "User C decreased the quantity of product A"
      },
    ]
  }

  const { name, itemCode, quantity, auditTrailListItems } = dummyProduct

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-12 justify-center mt-12">
          <div className="rounded-xl border border-gray-300 w-80 h-80"></div>

          <div>
            <div className="text-6xl font-bold">{name}</div>
            <ProductDetails itemCode={itemCode} quantity={quantity} />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 text-xl max-w-4xl w-full mt-12 py-12 px-20">
          <ul className="flex flex-col w-full">
            {auditTrailListItems.map((item, index) => (
              <ProductAuditTrailListItem key={item.id} index={index} item={item} totalItemCount={auditTrailListItems.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
