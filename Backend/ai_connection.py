import vertexai
from vertexai.language_models import TextGenerationModel
import os
import json

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = "confident-slice-404114-7d0b0ed1f4b4.json"

credentials_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS")

if credentials_path is None:
    credentials_path = "confident-slice-404114-7d0b0ed1f4b4.json"
    
globalstore = ""


def main():
    
    
    #interview(0.2,"confident-slice-404114","us-central1"  )

    ouroboros(0.2,"confident-slice-404114","us-central1")
    """
    with open(r"./prompts.txt", 'r') as file:
        input3 = file.read()
    return trigger(input3,0.2,"confident-slice-404114","us-central1")
    """

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

def ouroboros(
    
    temperature: float,
    project_id: str,
    location: str,
    depth: int = 0,
    max_depth: int = 5,
    previous_output: str = "",
    user_input: str = ""
):
    vertexai.init(project=project_id, location=location)
    # TODO developer - override these parameters as needed:
    parameters = {
        "temperature": temperature,
        "max_output_tokens": 1000,
        "top_p": 0.8,
        "top_k": 40,
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    global globalstore

    if depth >= max_depth:
        return None
    
    if not user_input:
        user_input = input("You: ")

    if os.path.isfile(user_input):
        with open(user_input, 'r') as file:
            user_input = file.read() 

    if depth == 0:
        combined_input = user_input
    else:
        combined_input = previous_output + user_input 

    response = model.predict(combined_input, **parameters)

    localstr = response.text
    globalstore += response.text

    print(f"Model: {localstr}")
    

    jsonString = {'orig_dat':localstr}
    return jsonString,ouroboros(temperature, project_id, location, depth+1, max_depth,globalstore)

def ouroboros2(
    temperature: float,
    project_id: str,
    location: str,
    user_input: str = ""
):
    vertexai.init(project=project_id, location=location)
    parameters = {
        "temperature": temperature,
        "max_output_tokens": 1000,
        "top_p": 0.8,
        "top_k": 40,
    }
    model = TextGenerationModel.from_pretrained("text-bison@001")
    response = model.predict(user_input, **parameters)
    return response.text 








if __name__ == "__main__":
    main()
