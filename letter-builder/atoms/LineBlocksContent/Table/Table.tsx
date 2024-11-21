const TableComponent = () => {
  return (
    <table className="min-w-full border-collapse border border-gray-300">
      <thead className="bg-gray-200 text-gray-800 text-left text-sm leading-5">
        <tr>
          <th className="p-2 border border-gray-300">Заголовок</th>
          <th className="p-2 border border-gray-300"></th>
          <th className="p-2 border border-gray-300"></th>
        </tr>
      </thead>
      <tbody className="text-gray-800">
        <tr>
          <td className="p-2 border border-gray-300">Параграф</td>
          <td className="p-2 border border-gray-300"></td>
          <td className="p-2 border border-gray-300"></td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300">Параграф</td>
          <td className="p-2 border border-gray-300"></td>
          <td className="p-2 border border-gray-300"></td>
        </tr>
        <tr>
          <td className="p-2 border border-gray-300">Параграф</td>
          <td className="p-2 border border-gray-300"></td>
          <td className="p-2 border border-gray-300"></td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
