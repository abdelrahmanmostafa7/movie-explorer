
import Card from "./Card";
import { Result } from "../types/types"; 

type Props = {
  results: Result[];
};

export default function Results({ results }: Props) {
  return (
    <div className="sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 max-w-6xl mx-auto py-4">
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  );
}
