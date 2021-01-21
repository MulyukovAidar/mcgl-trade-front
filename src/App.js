import { Button, Container } from '@material-ui/core';
import './App.css';
import { Header } from './components/Header';
import { ItemSection } from './components/ItemSection';
import { SearchBar } from './components/SearchBar';
import Grid from '@material-ui/core/Grid';
import TradeTable from './components/TradeTable';
import TradeForm from './components/TradeForm';

function App() {
  return (
    <div className="App">
      {/* <SearchBar /> */}
      {/* <TradeTable>  </TradeTable> */}
      {/* <Grid container fluid spacing={2} my={4}>
        <Grid item xs={6}>
          <span>Что я хочу</span>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
        </Grid>
        <Grid item xs={6}>
          <span>Что у меня есть</span>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
          <ItemSection></ItemSection>
        </Grid>
        <Grid container justify="center" xs={12}>
          <Button variant="outlined" fullWidth pt={6}>
            Искать
          </Button>
        </Grid>
      </Grid> */}
      <TradeForm/>
    </div>
  );
}

export default App;
