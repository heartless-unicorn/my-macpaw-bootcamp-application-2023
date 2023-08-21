export default function FiltersBreeds() {
  return (
    <div>
      <form>
        <div>
          <select>
            <option value="default">All breeds</option>
          </select>
        </div>
        <div>
          <select defaultValue="10">
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
          </select>
          <button>A - Z</button>
          <button>Z - A</button>
        </div>
      </form>
    </div>
  );
}
