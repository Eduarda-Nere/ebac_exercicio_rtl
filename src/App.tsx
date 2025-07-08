import Post from "./components/Post";

import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Post imageUrl="https://blog-static.petlove.com.br/wp-content/uploads/2023/09/28181700/cachorro-caramelo-Petlove.jpg">
        Olha só que lindo meu cachorrinho ❤️
      </Post>
    </div>
  );
}

export default App;
