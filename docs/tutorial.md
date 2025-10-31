

````markdown
# 🧭 **Guia Git Flow**

---

## 🚀 **COMEÇAR A PROGRAMAR**

---

### 1️⃣ Atualizar sua `develop` local com o que seus amigos já fizeram

```bash
git checkout develop
````
```bash
git pull origin develop
````

✅ Agora sua `develop` local está atualizada com tudo que seus amigos fizeram.

💡 **Dica importante:** Sempre faça `git pull` antes de começar a mexer para evitar conflitos grandes.

---

### 2️⃣ Criar uma nova feature para suas tarefas

```bash
git flow feature start tarefa-exemplo
```

Isso cria e muda para a branch `feature/tarefa-exemplo`.

💡 **Lembre-se:** Sempre crie suas features a partir de uma `develop` atualizada.

---

### 3️⃣ Trabalhar na feature

Faça suas alterações nos arquivos.

Para salvar progresso local:

```bash
git add .
```
```bash
git commit -m "Fiz tal coisa"
```

Você pode fazer vários commits enquanto trabalha na feature.

💡 **Dica:** Faça commits pequenos e frequentes.

---

### 4️⃣ Publicar a feature para que outros vejam ou colaborem

```bash
git flow feature publish tarefa-exemplo
```

Isso envia sua branch `feature/tarefa-exemplo` para o GitHub.

✅ Seus amigos agora podem puxar sua feature se precisarem trabalhar nela também.

---

### 5️⃣ Finalizar a feature e unir na `develop`

Quando terminar todas as mudanças:

```bash
git checkout develop
```
```bash
git pull origin develop
```
```bash
git checkout feature/tarefa-exemplo
```
```bash
git merge develop
```

Resolva conflitos (se houver) e faça commit se precisar.

Finalize a feature:

```bash
git flow feature finish tarefa-exemplo
```

✅ Isso faz merge da feature na `develop` e apaga a branch local da feature.

Agora suba a `develop` atualizada para o GitHub:

```bash
git push origin develop
```

---

## 👥 **Como seus amigos pegam o que você fez**

No computador deles:

```bash
git checkout develop
git pull origin develop
```

✅ Agora eles terão tudo que você enviou.

---

## ⚠️ **CASO PROGRAME DENTRO DE UMA DEVELOP SEM QUERER**

---

### 1️⃣ Criar a feature branch a partir da `develop` atual

```bash
git checkout -b feature/nome-da-feature
```

Isso cria uma branch nova chamada `feature/nome-da-feature` com todas as alterações que você já fez na `develop`.

---

### 2️⃣ Commitar suas alterações na feature

```bash
git add .
git commit -m "Minhas alterações que estavam na develop"
```

Agora suas alterações estão salvas na feature branch.

---

### 3️⃣ Voltar para a `develop` e descartar as alterações de lá

```bash
git checkout develop
git reset --hard origin/develop
```

💡 Isso faz a `develop` local ficar exatamente igual à do GitHub, sem as alterações que agora estão na feature.

---

### 4️⃣ Continuar trabalhando na feature

```bash
git checkout feature/nome-da-feature
```

Commit frequente:

```bash
git add .
git commit -m "Outra melhoria na feature"
```

Publicar para o GitHub (se quiser):

```bash
git flow feature publish nome-da-feature
```

---

### 5️⃣ Finalizar a feature e unir na `develop` (quando terminar)

Certifique-se que a `develop` está atualizada:

```bash
git checkout develop
git pull origin develop
```

Volte para a feature:

```bash
git checkout feature/nome-da-feature
git merge develop
git flow feature finish nome-da-feature
```

Suba a develop atualizada para o GitHub:

```bash
git push origin develop
```

---

## 🧩 **CASO PROGRAME DIRETO NA DEVELOP (E QUEIRA ENVIAR PRA DEVELOP MESMO)**

---

### 1️⃣ Garantir que sua `develop` local está atualizada

```bash
git checkout develop
git pull origin develop
```

✅ Isso evita conflitos com o que já foi enviado por outras pessoas.

---

### 2️⃣ Verificar e commitar suas alterações

```bash
git status
git add .
git commit -m "Descrição do que foi alterado"
```

💡 Dica: faça commits claros e descritivos.

---

### 3️⃣ Atualizar novamente antes de enviar (pra evitar conflitos)

```bash
git pull origin develop
```

Resolva conflitos se aparecerem, e faça novo commit se necessário.

---

### 4️⃣ Enviar suas alterações para o GitHub

```bash
git push origin develop
```

✅ Suas mudanças agora estão na `develop` do GitHub.

---

## 🔄 **Como seus amigos pegam o que você enviou direto na develop**

Se você mandou alterações direto pela `develop` (sem Pull Request), eles só precisam fazer:

```bash
git checkout develop
git pull origin develop
```

✅ Assim, o repositório deles fica atualizado com as suas mudanças mais recentes.

---

📘 **Dica final:**

* Sempre **puxe (pull)** antes de começar e **envie (push)** depois que terminar.
* Use **branches separadas** (`feature/...`) pra manter tudo organizado.
* Evite mexer direto na `develop` a não ser que seja algo urgente e pequeno.

---

🧱 **Feito por:** Matheus – MG Soluções Drywall / CWB Idiomas 💼

```

---

Se quiser, posso gerar esse arquivo `.md` pra você baixar direto (já com o nome `tutorial-git.md`).  
Quer que eu gere o arquivo pronto pra download?
```
