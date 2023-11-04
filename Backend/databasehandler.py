from dotenv import load_dotenv

# Load environment variables from the .env file
load_dotenv()
import os
import MySQLdb


def commit_token_email(access_token,expires_in,scope,id_token,expires_at, email):
    # Connect to the database
    try:
        connection = MySQLdb.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USERNAME"),
        passwd=os.getenv("DATABASE_PASSWORD"),
        db=os.getenv("DATABASE"),
        autocommit=True,
        ssl_mode="VERIFY_IDENTITY",
        # See https://planetscale.com/docs/concepts/secure-connections#ca-root-configuration
        # to determine the path to your operating systems certificate file.
        ssl={ "ca": r"Backend\cacert-2023-08-22.pem"}
        )

        cursor = connection.cursor()
        create_user_query = '''
                INSERT INTO users (access_token, expires_in, scope, id_token, expires_at, email)
                VALUES (%s, %s, %s, %s, %s, %s)
            '''
        cursor.execute(create_user_query,(access_token,expires_in,scope,id_token,expires_at,email))
        connection.commit()

        cursor.close()
        connection.close()
        return True
    except Exception as e:
        print(f"Error committing to database: {e}")
        return False
    
def main():
    connection = MySQLdb.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USERNAME"),
        passwd=os.getenv("DATABASE_PASSWORD"),
        db=os.getenv("DATABASE"),
        autocommit=True,
        ssl_mode="VERIFY_IDENTITY",
        # See https://planetscale.com/docs/concepts/secure-connections#ca-root-configuration
        # to determine the path to your operating systems certificate file.
        ssl={ "ca": r"Backend\cacert-2023-08-22.pem"}
    )

    cursor = connection.cursor()

    select = '''SELECT * FROM users'''

    cursor.execute(select)

    results = cursor.fetchall()

    for x in results:
        print(x)
    
    cursor.close()

    connection.close()




def refactor():
    connection = MySQLdb.connect(
        host=os.getenv("DATABASE_HOST"),
        user=os.getenv("DATABASE_USERNAME"),
        passwd=os.getenv("DATABASE_PASSWORD"),
        db=os.getenv("DATABASE"),
        autocommit=True,
        ssl_mode="VERIFY_IDENTITY",
        # See https://planetscale.com/docs/concepts/secure-connections#ca-root-configuration
        # to determine the path to your operating systems certificate file.
        ssl={ "ca": r"Backend\cacert-2023-08-22.pem"}
    )

    cursor = connection.cursor()
    delete_old = '''DROP TABLE users'''
    cursor.execute(delete_old)

    create_table_query = '''
        CREATE TABLE users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            access_token VARCHAR(255) NOT NULL,
            expires_in INT NOT NULL,
            scope VARCHAR(255) NOT NULL,
            id_token VARCHAR(1200) NOT NULL,
            expires_at INT NOT NULL,
            email VARCHAR(255) NOT NULL
        )
        '''
    
    cursor.execute(create_table_query)
    
    #connection.commit()
    #connection.close()
    #cursor.close()

    connectcursor(connection)



def connectcursor(connection):
    try:
        # Create a cursor to interact with the database
        cursor = connection.cursor()
        # Execute "SHOW TABLES" query
        cursor.execute("SHOW TABLES")

        # Fetch all the rows
        tables = cursor.fetchall()

        # Print out the tables
        print("Tables in the database:")
        for table in tables:
            print(table[0])

    except MySQLdb.Error as e:
        print("MySQL Error:", e)

    finally:
        # Close the cursor and connection
        cursor.close()
        connection.close()



if __name__ == "__main__":
    main()