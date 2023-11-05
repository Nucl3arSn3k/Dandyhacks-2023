import vertexai
from vertexai.language_models import TextGenerationModel
import os
import json
from oauth2client.client import GoogleCredentials

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "confident-slice-404114-7d0b0ed1f4b4.json"

credentials_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

if credentials_path is None:
    credentials_path = "confident-slice-404114-7d0b0ed1f4b4.json"
    
credentials = GoogleCredentials.get_application_default()


def main():
    
    
    #interview(0.2,"confident-slice-404114","us-central1")

    with open(r"./prompts.txt", 'r') as file:
        input3 = file.read()
    return trigger(input3,0.2,"confident-slice-404114","us-central1")

def interview(
    temperature: float,
    project_id: str,
    location: str,
) -> str:
    """Ideation example with a Large Language Model"""

    vertexai.init(project=project_id, location=location)
    # TODO developer - override these parameters as needed:
    parameters = {
        "temperature": temperature, #max tempp is also 1.0
        "max_output_tokens": 1000, #2048 is the token limit
        "top_p": 0.8, #topp maxes to 1.0
        "top_k": 40, #topk maxes out to 40
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
    vertexai.init(project=project_id, location=location, )
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

    print(f"Model:{localstr}")
    localstr+="\nAnswer question 1"
    response2 = model.predict (localstr,**parameters)

    print(f"Model2:{response2.text}")
    total_text = localstr + response2.text

    questions_list = localstr.strip().split('\n')
    
    questions_dict = {}

    for x,question in enumerate(questions_list,start=1):
        questions_dict[f"Question"]=question.strip()

    questions_json = json.dumps(questions_dict, indent=4)
    return total_text
    #print(questions_json)

#def categorization(input_text)




if __name__ == "__main__":
    main()
