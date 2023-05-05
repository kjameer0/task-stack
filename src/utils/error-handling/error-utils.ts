//basic type for error message
type ErrorWithMessage = {
  message: string;
};

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    //checks if input is an non-null object with an
    //error property and that message is a string
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  );
}

//convert whatever existing thrown value
//is into an error with a message property
function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError;

  try {
    return new Error(JSON.stringify(maybeError));
  } catch {
    // fallback in case there's an error stringifying the maybeError
    // like with circular references for example.
    return new Error(String(maybeError));
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message;
}
