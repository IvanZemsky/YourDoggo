import styles from './AboutProduct.module.scss'

interface AboutProductProps {
   parameters: string[][]
}

const AboutProduct = ({ parameters }: AboutProductProps) => {
   return (
     <>
       {parameters && (
         <>
           <h3 className={styles.about}>О товаре</h3>
 
           <table className={styles.parameters}>
             <tbody>
               {parameters.map(([name, value]) => (
                  <tr key={name}>
                     <td>{name}</td>
                     <td>{value}</td>
                  </tr>
               ))}
             </tbody>
           </table>
         </>
       )}
     </>
   );
 };

export default AboutProduct
