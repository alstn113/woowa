import InvalidInputException from '../exceptions/InvalidInputException';
import OutputView from '../views/console/OutputView';

const getInputWithValidation = async (resolve, validate) => {
  while (true) {
    try {
      const input = await resolve();
      validate(input);
      return input;
    } catch (error) {
      if (error instanceof InvalidInputException) {
        OutputView.printError(error.message);
      } else {
        throw error;
      }
    }
  }
};

export default getInputWithValidation;
