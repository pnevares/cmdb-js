import fetch from 'isomorphic-unfetch';
import { apiUrl } from '../src/util';

const App = ({ data }) =>
  <div>
    Api response: {data}
  </div>

App.getInitialProps = async () => {
  const res = await fetch(`${apiUrl}/api`);
  const json = await res.json();
  return { data: json.message };
}

export default App;
