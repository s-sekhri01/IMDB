const WatchListPage = ({ watchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <h1>Watchlist</h1>
      <table>
        <tr>
          <td>Movie Name</td>
        </tr>
        {Object.values(watchlist).map((movie) => (
          <tr>
            <td>{movie.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default WatchListPage;
