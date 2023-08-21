export default function GalleryFilters() {
  return (
    <div>
      <form>
        <label>
          <p>Order:</p>
          <select>
            <option value="RAND">Random</option>
            <option value="DESC">A to Z</option>
            <option value="ASC">Z to A</option>
          </select>
        </label>
        <label>
          <p> Limit: </p>
          <select defaultValue="10">
            <option value="5">Limit: 5</option>
            <option value="10">Limit: 10</option>
            <option value="15">Limit: 15</option>
            <option value="20">Limit: 20</option>
          </select>
        </label>
        <label>
          <p>Type:</p>
          <select defaultValue="All">
            <option value="jpg,png,gif">All</option>
            <option value="jpg,png">Static</option>
            <option value="gif">Animated</option>
          </select>
        </label>
        <label>
          <p>Breeds: </p>
          <select>
            <option value="defaut">All breeds</option>
            <option>All breeds</option>
          </select>
        </label>
      </form>
    </div>
  );
}
