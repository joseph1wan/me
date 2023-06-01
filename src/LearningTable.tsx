import LearningItem from "./LearningItem"
import data from "./data/learnings.json"
import { Props } from "./LearningItem"

export default function LearningTable() {
  const items: Props[] = data.categories[0].items
  return (
    <div className="">
      <h1 className="text-4xl font-bold">Things I am Learning</h1>
      {
        items.map(learningItem => {
          return (
            <LearningItem
              key={learningItem.name}
              name={learningItem.name}
              items={learningItem.items}
            />
          )
        })
      }
    </div>
  );
}
