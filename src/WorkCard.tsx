import WorkExperience from "./interfaces/WorkExperience"

interface Props {
  work: WorkExperience
}

export default function WorkCard({work}: Props) {
  function getMonthName(monthNumber: number): string {
    const date = new Date();
    date.setMonth(monthNumber - 1);

    return date.toLocaleString('en-US', { month: 'long' });
  }

  return (
    <div
      className="invisible bg-gray-900 text-white group-hover:visible absolute top-0 mt-10 block overflow-hidden rounded-lg border border-gray-100 p-4 sm:p-6 lg:p-8"
    >
      {/* Bottom border */}
      <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600" ></span>

    <div className="sm:flex sm:justify-between sm:gap-4">
      <div>
        <h3 className="text-lg font-bold sm:text-xl">
          { work.position }
        </h3>

        <p className="mt-1 text-xs font-medium">{work.company}</p>
      </div>

      {/* <div className="hidden sm:block sm:shrink-0"> */}
      {/*   <img */}
      {/*     alt="Paul Clapton" */}
      {/*     src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80" */}
      {/*     className="h-16 w-16 rounded-lg object-cover shadow-sm" */}
      {/*   /> */}
      {/* </div> */}
    </div>

    <div className="mt-4">
      <p className="max-w-[40ch] text-sm">
        { work.summary }
      </p>
    </div>

    <dl className="mt-6 flex gap-4 sm:gap-6">
      <div className="flex flex-col-reverse">
        <dt className="text-sm font-medium">{getMonthName(work.start.month)}, {work.start.year}</dt>
        <dd className="text-xs">Start date</dd>
      </div>

      <div className="flex flex-col-reverse">
        <dt className="text-sm font-medium">{getMonthName(work.end.month)}, {work.end.year}</dt>
        <dd className="text-xs">End date</dd>
      </div>
    </dl>
  </div>
)
}
