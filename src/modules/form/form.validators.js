// validate : (value, allValues, props) => error [optional] #
export const required = (value) => {
    if (!value) {
      return 'This field is required!'
    }
  };