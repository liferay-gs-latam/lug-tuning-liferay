import requests
import csv
import json
from requests.auth import HTTPBasicAuth

# Configurações
LIFERAY_URL = "http://localhost:8080"
API_URL = f"{LIFERAY_URL}/o/headless-admin-user/v1.0"
AUTH = HTTPBasicAuth("test@liferay.com", "test")  # Substitua com suas credenciais
CSV_FILE = "users.csv"  # Caminho para o arquivo CSV

def criar_usuario(dados_usuario):
    """Cria um usuário no Liferay usando a API Headless"""
    url = f"{API_URL}/user-accounts"
    
    # Mapeia os campos do CSV para o formato esperado pela API
    payload = {
        "alternateName": dados_usuario.get("alternateName", ""),
        "emailAddress": dados_usuario["emailAddress"],
        "familyName": dados_usuario["lastName"],
        "givenName": dados_usuario["firstName"],
        "password": dados_usuario["password"],
        "jobTitle": dados_usuario.get("jobTitle", ""),
        # Adicione outros campos conforme necessário
    }
    
    headers = {
        "Content-Type": "application/json",
        "Accept": "application/json"
    }
    
    try:
        response = requests.post(
            url,
            auth=AUTH,
            headers=headers,
            data=json.dumps(payload)
        )
        
        if response.status_code == 200:
            print(f"Usuário {dados_usuario['emailAddress']} criado com sucesso!")
            return response.json()
        else:
            print(f"Erro ao criar usuário {dados_usuario['emailAddress']}:")
            print(f"Status Code: {response.status_code}")
            print(f"Resposta: {response.text}")
            return None
            
    except Exception as e:
        print(f"Erro na requisição para {dados_usuario['emailAddress']}: {str(e)}")
        return None

def ler_csv_e_criar_usuarios():
    """Lê o arquivo CSV e cria os usuários"""
    try:
        with open(CSV_FILE, mode='r', encoding='utf-8') as csv_file:
            csv_reader = csv.DictReader(csv_file)
            
            for row in csv_reader:
                print(f"Processando usuário: {row['emailAddress']}")
                resultado = criar_usuario(row)
                
                if not resultado:
                    print("Pulando para o próximo usuário...")
                
    except FileNotFoundError:
        print(f"Arquivo {CSV_FILE} não encontrado!")
    except Exception as e:
        print(f"Erro ao processar arquivo CSV: {str(e)}")

if __name__ == "__main__":
    print("Iniciando processo de criação de usuários em massa...")
    ler_csv_e_criar_usuarios()
    print("Processo concluído!")