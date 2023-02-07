type BookSubjectsProps = {
  subjects?: Array<string>;
  max?: number;
  align?: "start" | "center";
};

export default function BookSubjects({
  subjects,
  max,
  align = "start",
}: BookSubjectsProps) {
  return (
    <>
      {subjects ? (
        <div
          className={`flex flex-row flex-wrap items-center  justify-${align} mt-4 -mx-2`}
        >
          {subjects.slice(0, max || subjects.length).map((subject) => {
            let tag = subject.split(" -- ")[0];
            return (
              <p
                className="text-sm bg-gray-200 border border-gray-300 py-1 px-4 my-1 mx-2 rounded-lg"
                key={tag}
              >
                {tag}
              </p>
            );
          })}
        </div>
      ) : null}
    </>
  );
}
