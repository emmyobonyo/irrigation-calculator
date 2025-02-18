type Content = {
  id: number;
  content: string;
};

interface IterationProps {
  name: string;
  contents: Content[];
  setContent: (value: string) => void;
}

export default function Iteration({
  name,
  contents,
  setContent,
}: IterationProps) {
  return (
    <div className="flex items-center justify-between mb-5">
      <label className="block w-3/10 mb-2 text-xl font-medium text-gray-900 dark:text-white mr-5">
        {name}:
      </label>
      <select
        id="week"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white w-full"
        required
        onChange={(e) => {
          const value = e.target.value;
          setContent(value);
        }}
      >
        {contents.map((content: Content) => (
          <option key={content.id} value={content.content}>
            {content.content}
          </option>
        ))}
      </select>
    </div>
  );
}
