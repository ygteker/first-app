export default function MealDetails({ params }) {
  return (
    <main>
      <h1>Meal Details</h1>
      <h1>{params.mealSlug}</h1>
    </main>
  );
}
