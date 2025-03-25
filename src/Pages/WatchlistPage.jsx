const WatchListPage = ({ watchlist }) => {
  console.log(watchlist);
  return (
    <div>
      <h1>Watchlist</h1>
      <table border={1}>
        <tr>
          <td>Movie Id</td>
          <td>Movie Name</td>
        </tr>
        {Object.values(watchlist).map((movie) => (
          <tr>
            <td>{movie.id}</td>
            <td>{movie.title}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};
export default WatchListPage;
