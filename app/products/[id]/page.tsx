import ProductDetails from '../../components/Product/ProductDetails'
import ProductAuditTrailListItem from '../../components/Product/ProductAuditTrailListItem'

export default function ProductPage({ params }: { params: { id: string } }) {
  const productAuditTrailListItems = [
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

  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-12 justify-center mt-12">
          <div className="rounded-xl border border-gray-300 w-80 h-80"></div>

          <div>
            <div className="text-6xl font-bold">Product Name</div>

            <ProductDetails itemCode="_item_code" quantity={0} />
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 text-xl max-w-4xl w-full mt-12 py-12 px-20">
          <ul className="flex flex-col w-full">
            {productAuditTrailListItems.map((item, index) => (
              <ProductAuditTrailListItem key={item.id} index={index} item={item} totalItemCount={productAuditTrailListItems.length - 1} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
