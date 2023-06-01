export interface Props {
  name: string,
  items: Item[]
}

interface Item {
  name: string,
  description: string,
  link: string,
}

export default function LearningItem({ name, items }: Props) {
  return (
    <div className="mt-5">
      <div className="rounded-xl border-2 border-gray-500 bg-gray-100">
        <div className="flex justify-between p-4 sm:p-6 lg:p-8">
          <div>
            <h3 className="font-medium sm:text-lg text-black">
              {/* <a href={} className="text-black hover:underline"> */}
                {name}
              {/* </a> */}
            </h3>

            {/* <p className="line-clamp-2 text-sm text-gray-700"> */}
            {/*   {description} */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  )
}
