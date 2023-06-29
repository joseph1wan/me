import { useState } from 'react';

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
  const [isShown, setIsShown] = useState<boolean>(false);

  return (
    <div className="mt-5"
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <div className="mt-8">
        <div className="flex items-start gap-4">
          <span className="shrink-0 rounded-lg bg-gray-800 p-4">
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              ></path>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              ></path>
            </svg>
          </span>

          <div>
            <h2 className="text-lg font-bold">{name}</h2>
              { isShown && (
                <p className="line-clamp-2 text-sm">
                  { 
                    items.map(item => {
                      return (
                        item.name
                      )
                    })
                  }
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    )
}
