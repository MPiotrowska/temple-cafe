import '../styles/globals.css';
import App, { Container } from 'next/app';
import { Page } from '../components/Page';
// import { ScrollProvider } from '../lib/scrollContext';

class MyApp extends App {
  render() {
    const { Component } = this.props;
    return (
      // <ScrollProvider>
      <>
        <Page>
          <Component />
        </Page>
      </>
      // </ScrollProvider>
    );
  }
}

export default MyApp;
