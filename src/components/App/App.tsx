import styles from './App.module.scss'
import AppRoutes from '../AppRoutes/AppRoutes'

const App = () => {
   return (
      <div className={styles.app}>
         <AppRoutes />
      </div>
   );
};

export default App;
