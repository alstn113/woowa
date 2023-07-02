import InvalidInputException from '../exceptions/InvalidInputException';
import OutputView from '../views/console/OutputView';

const handleAsyncError = async (asnycFn) => {
  while (true) {
    try {
      await asnycFn();
    } catch (error) {
      if (error instanceof InvalidInputException) {
        OutputView.printError(error.message);
      } else {
        throw error;
      }
    }
  }
};

export default handleAsyncError;
