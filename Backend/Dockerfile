FROM python:3.10.3



# Set the working directory inside the container
WORKDIR /app

# Copy the local files into the container at /app
COPY . /app

EXPOSE 5000

# Install any necessary dependencies

RUN pip3 install -r requirements.txt

ENV PORT 5000

CMD [ "python", "ai_connection.py" ]