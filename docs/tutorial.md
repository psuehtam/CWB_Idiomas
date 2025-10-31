# 🧭 **Guia Git Flow**
---

## 🚀 **COMEÇAR A PROGRAMAR**

---

### 1️⃣ **Atualizar sua `develop` local com o que seus amigos já fizeram**

```bash
git checkout develop
````

```bash
git pull origin develop
```

> [!TIP]
> Sempre atualize sua `develop` antes de começar qualquer coisa.
> Isso evita conflitos e garante que você está trabalhando com o código mais recente.

✅ Agora sua `develop` local está **sincronizada com o GitHub**.

---

### 2️⃣ **Criar uma nova feature para suas tarefas**

```bash
git flow feature start tarefa-exemplo
```

> [!NOTE]
> Isso cria e muda automaticamente para a branch
> **`feature/tarefa-exemplo`**, derivada da sua `develop` atual.

💡 **Dica:** Sempre crie suas features a partir de uma `develop` atualizada.

---

### 3️⃣ **Trabalhar na feature**

Faça suas alterações normalmente.
Quando quiser salvar seu progresso local:

```bash
git add .
```

```bash
git commit -m "Fiz tal coisa"
```

> [!TIP]
> Faça **commits pequenos e frequentes**, facilita entender e corrigir mudanças.

---

### 4️⃣ **Publicar a feature para que outros vejam ou colaborem**

```bash
git flow feature publish tarefa-exemplo
```

> [!NOTE]
> Isso envia sua branch `feature/tarefa-exemplo` para o GitHub,
> permitindo que outros possam baixá-la e trabalhar junto.

✅ Agora seus amigos podem **puxar sua feature** se precisarem colaborar.

---

### 5️⃣ **Finalizar a feature e unir na `develop`**

Quando terminar tudo:

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

> [!CAUTION]
> Se aparecerem conflitos, **resolva-os** e **faça um novo commit** antes de continuar.

Finalize a feature:

```bash
git flow feature finish tarefa-exemplo
```

> [!IMPORTANT]
> Esse comando faz o **merge da feature na develop** e **apaga a branch local da feature**.

Suba a `develop` atualizada para o GitHub:

```bash
git push origin develop
```

✅ Agora **todas as suas mudanças estão na develop do GitHub**.

---

## 👥 **Como seus amigos pegam o que você fez**

```bash
git checkout develop
```

```bash
git pull origin develop
```

> [!NOTE]
> Assim, o repositório deles fica **atualizado com tudo que você enviou**.

---

## ⚠️ **CASO PROGRAME DENTRO DE UMA DEVELOP SEM QUERER**

---

### 1️⃣ **Criar uma feature branch a partir da develop atual**

```bash
git checkout -b feature/nome-da-feature
```

> [!NOTE]
> Isso cria uma nova branch **feature/nome-da-feature**
> contendo tudo o que você alterou por engano na `develop`.

---

### 2️⃣ **Commitar suas alterações na feature**

```bash
git add .
```

```bash
git commit -m "Minhas alterações que estavam na develop"
```

Agora suas alterações estão salvas na nova feature.

---

### 3️⃣ **Voltar para a develop e limpar o que estava lá**

```bash
git checkout develop
```

```bash
git reset --hard origin/develop
```

> [!WARNING]
> Este comando **descarta todas as alterações locais** da `develop`.
> Tenha certeza de que já salvou tudo na feature antes de rodar.

---

### 4️⃣ **Continuar trabalhando na feature**

```bash
git checkout feature/nome-da-feature
```

Commit frequente:

```bash
git add .
```

```bash
git commit -m "Outra melhoria na feature"
```

Publicar no GitHub:

```bash
git flow feature publish nome-da-feature
```

---

### 5️⃣ **Finalizar a feature e unir na develop**

```bash
git checkout develop
```
```bash
git pull origin develop
```
```bash
git checkout feature/nome-da-feature
```
```bash
git merge develop
```
```bash
git flow feature finish nome-da-feature
```
```bash
git push origin develop
```

✅ Tudo certo! A `develop` agora tem suas mudanças integradas.

---

## 🧩 **CASO PROGRAME DIRETO NA DEVELOP (E QUEIRA ENVIAR PRA DEVELOP MESMO)**

---

### 1️⃣ **Garantir que sua develop local está atualizada**

```bash
git checkout develop
```

```bash
git pull origin develop
```

> [!TIP]
> Fazer isso antes de começar evita sobrescrever o trabalho dos outros.

---

### 2️⃣ **Verificar e commitar suas alterações**

```bash
git status
```

```bash
git add .
```

```bash
git commit -m "Descrição do que foi alterado"
```

💡 **Dica:** Escreva mensagens de commit **claras e descritivas**.

---

### 3️⃣ **Atualizar novamente antes de enviar (pra evitar conflitos)**

```bash
git pull origin develop
```

> [!CAUTION]
> Se aparecerem conflitos, resolva e **faça um novo commit** antes de enviar.

---

### 4️⃣ **Enviar suas alterações para o GitHub**

```bash
git push origin develop
```

✅ Suas mudanças estão **na develop do GitHub**.

---

> [!NOTE]
> Assim eles recebem automaticamente tudo o que você enviou direto da develop,
> sem precisar de Pull Request.

---

## 💬 **Dicas Finais**

> [!IMPORTANT]
> 🔹 Sempre **puxe (pull)** antes de começar.
> 🔹 Sempre **envie (push)** depois que terminar.
> 🔹 Use **features separadas** para cada tarefa.
> 🔹 Evite trabalhar direto na develop, exceto em casos simples e urgentes.

---
