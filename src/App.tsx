
import { useState } from 'react';
import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { NewTransactionModal } from './components/NewTransactionModal';
import { GlobalStyle } from './styles/global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactioonModalOPen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }
  
  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />

      <NewTransactionModal
        isOpen={isNewTransactioonModalOPen}
        onRequestClose={handleCloseNewTransactionModal}
      />

      <Dashboard />

      <GlobalStyle />
    </TransactionsProvider>
  );
}
