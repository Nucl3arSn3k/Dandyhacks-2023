import vertexai
from vertexai.language_models import TextGenerationModel
import os
import json
def main():
    #interview(0.2,"confident-slice-404114","us-central1")
    with open(r"Backend\prompts.txt", 'r') as file:
        input3 = file.read()
    trigger(input3,0.2,"confident-slice-404114","us-central1")

def interview(
    temperature: float,
    project_id: str,
    location: str,
) -> str:
    """Ideation example with a Large Language Model"""

    vertexai.init(project=project_id, location=location)
    # TODO developer - override these parameters as needed:
    parameters = {
        "temperature": temperature,
        "max_output_tokens": 1000,
        "top_p": 0.8,
        "top_k": 40,
    }

    model = TextGenerationModel.from_pretrained("text-bison@001")

    while True:
        user_input = input("You: ")
        
        if user_input.upper() == 'EXIT':
            break

        # Check if user input is a file path
        if os.path.isfile(user_input):
            with open(user_input, 'r') as file:
                user_input = file.read()

        response = model.predict(user_input, **parameters)
        print(f"Model: {response.text}")


def trigger(user_input,temperature: float,
    project_id: str,
    location: str,):
    vertexai.init(project=project_id, location=location)
    # TODO developer - override these parameters as needed:
    parameters = {
        "temperature": temperature,
        "max_output_tokens": 1000,
        "top_p": 0.8,
        "top_k": 40,
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")

    response = model.predict(user_input,**parameters)

    localstr = response.text

    questions_list = localstr.strip().split('\n')
    questions_dict = {}

    for x,question in enumerate(questions_list,start=1):
        questions_dict[f"Question {x}"]=question.strip()

    questions_json = json.dumps(questions_dict, indent=4)
    print(questions_json)




if __name__ == "__main__":
    main()
