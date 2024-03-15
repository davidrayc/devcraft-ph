export default function ProductPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <div className="flex flex-col items-center">
        <div className="flex gap-x-12 justify-center mt-12">
          <div className="rounded-xl border border-gray-300 w-80 h-80"></div>

          <div>
            <div className="text-6xl font-bold">Product Name</div>

            <div className="flex flex-col gap-y-6 mt-6">
              <div className="text-xl">
                <div className="font-bold">Item code</div>
                <div>_item_code</div>
              </div>

              <div className="text-xl">
                <div className="font-bold">Quantity</div>
                <div>_quantity</div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-300 text-xl max-w-4xl w-full mt-12 py-12 px-20">
          <ul className="flex flex-col w-full">
            <li className="flex gap-x-4 items-center h-12">
              <div className="flex flex-col h-full items-center">
                <div className="grow bg-none w-1"></div>
                <div className="rounded-full bg-gray-300 w-3 h-3 my-1"></div>
                <div className="grow bg-gray-300 w-1"></div>
              </div>

              <div>
                User A decreased the quantity of product A
              </div>
            </li>

            <li className="flex gap-x-4 items-center h-12">
              <div className="flex flex-col h-full items-center">
                <div className="grow bg-gray-300 w-1"></div>
                <div className="rounded-full bg-gray-300 w-3 h-3 my-1"></div>
                <div className="grow bg-gray-300 w-1"></div>
              </div>

              <div>
                User B decreased the quantity of product A
              </div>
            </li>

            <li className="flex gap-x-4 items-center h-12">
              <div className="flex flex-col h-full items-center">
                <div className="grow bg-gray-300 w-1"></div>
                <div className="rounded-full bg-gray-300 w-3 h-3 my-1"></div>
                <div className="grow bg-none w-1"></div>
              </div>

              <div>
                User C decreased the quantity of product A
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
