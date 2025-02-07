import Button from "./components/Button";
import Container from "./components/Container";
import CustomButton from "./components/CustomButton";
import MyComponent from "./components/MyComponent";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* 1 - CSS Global */}
      <h1>Meu Título</h1>
      {/* 2 - CSS Modules */}
      <h2 className={styles.heading_module}> Meu CSS Modules</h2>
      <div className={styles.container}>
        <p>Testando CSS modules</p>
      </div>
      <div className={styles.container}>
        <h3>Testando CSS modules</h3>
      </div>
      {/* 3 - Tailwind */}
      <MyComponent />
      {/* 4 - SASS */}
      <Container />
      {/* 5 - SASS com CSS Modules */}
      <Button />
      {/* 6 - Styled components */}
      <CustomButton>Clique aqui</CustomButton>
    </div>
  );
}
