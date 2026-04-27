import { ThemeProvider } from 'styled-components';
import './App.css';
import GlobalStyle from './styles/global';
import theme from './styles/theme';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

function App() {

  const queryClient = new QueryClient()

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}/>
        </ThemeProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
