type ProductAuditTrailListItemProps = {
  index: number;

  item: {
    id: number;
    description: string;
  }

  totalItemCount: number;
}

const ProductAuditTrailListItem = ({ index, item, totalItemCount }: ProductAuditTrailListItemProps) => {
  return (
    <li className="flex gap-x-4 items-center h-12">
      <div className="flex flex-col h-full items-center">
        <div className={`grow ${index === 0 ? 'bg-none' : 'bg-gray-300'} w-1`}></div>
        <div className="rounded-full bg-gray-300 w-3 h-3 my-1"></div>
        <div className={`grow ${index === totalItemCount ? 'bg-none' : 'bg-gray-300'} w-1`}></div>
      </div>

      <div>
        {item.description}
      </div>
    </li>
  );
}

export default ProductAuditTrailListItem;
