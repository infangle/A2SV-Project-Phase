// app/layout.tsx
import { Provider } from 'react-redux';
import store from '../redux/store'; // Adjust the path if necessary

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <div>
        {children}
      </div>
    </Provider>
  );
}
