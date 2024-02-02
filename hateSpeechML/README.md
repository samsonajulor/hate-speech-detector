# hateSpeech DApp

This example shows a simple way of leveraging some of the most widely used Machine Learning libraries available in Python.

The DApp generates a [logistic regression](https://en.wikipedia.org/wiki/Logistic_regression) model using [scikit-learn](https://scikit-learn.org/), [NumPy](https://numpy.org/) and [pandas](https://pandas.pydata.org/), and then uses [hateSpeech (Model to Code Generator)](https://github.com/BayesWitnesses/hateSpeech) to transpile that model into native Python code with no dependencies.
This approach is inspired by [Davis David's Machine Learning tutorial](https://www.freecodecamp.org/news/transform-machine-learning-models-into-native-code-with-zero-dependencies/), and is useful for a Cartesi DApp because it removes the need of porting all those Machine Learning libraries to the Cartesi Machine's RISC-V architecture, making the development process easier and the final back-end code simpler to execute.

## Running the environment in host mode

When developing an application, it is often important to easily test and debug it. For that matter, it is possible to run the Cartesi Rollups environment in [host mode](../README.md#host-mode), so that the DApp's back-end can be executed directly on the host machine, allowing it to be debugged using regular development tools such as an IDE.

In order to start the back-end, run the following commands in a dedicated terminal:

```shell
cd hateSpeech
python3 -m venv .venv
. .venv/bin/activate
pip install -r requirements.txt
ROLLUP_HTTP_SERVER_URL="http://127.0.0.1:5004" python3 hateSpeech.py
```

The final command will effectively run the back-end and send corresponding outputs to port `5004`.
It can optionally be configured in an IDE to allow interactive debugging using features like breakpoints.

You can also use a tool like [entr](https://eradman.com/entrproject/) to restart the back-end automatically when the code changes. For example:

```shell
ls *.py | ROLLUP_HTTP_SERVER_URL="http://127.0.0.1:5004" entr -r python3 hateSpeech.py
```

After the back-end successfully starts, it should print an output like the following:

```log
INFO:__main__:HTTP rollup_server url is http://127.0.0.1:5004
INFO:__main__:Sending finish
```

After that, you can interact with the application normally [as explained above](#interacting-with-the-application).
