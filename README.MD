# Desafio Técnico - Mobiliza

## Pré-requisitos

- Python 3
- docker
- docker-compose

## Uso

### Modo de desenvolvimento
A pasta `scripts` contém um script` devenv.py` que fornece uma abstração útil
sobre o `docker-compose` para o ambiente de um desenvolvedor.
```
cd mobiliza/scripts/
python3 devenv.py help
```

### Variáveis de ambiente
A API de busca OMDb é usada para listar os filmes encontrados, por isso é
necessário declarar a REACT_APP_KEY em suas variaveis de ambiente.
```
mobiliza/frontend/docker/.docker.dev.env
REACT_APP_KEY=suachave
```
Para obter a chave de acesso basta fazer o cadastro em:
http://www.omdbapi.com/apikey.aspx


## Descrição

![Image of description](https://github.com/MarianyFerreira/mobiliza/blob/master/description.png)
