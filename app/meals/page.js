import Link from "next/link";

export default function MealsPage() {
  return (
    <div>
      <h1>Meals</h1>
      <Link href="/meals/meal-1">Meal 1</Link>
      <Link href="/meals/meal-2">Meal 2</Link>
      <p></p>
    </div>
  );
}
