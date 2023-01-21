/*DOM (Document Object Model) - transforma elementos do HTML em objetos JavaScript
document - é possível controlar a página HTML através do objeto document*/
const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add) //sempre que o evento click acontecer, ele ativa a função add()
form.addEventListener('change', save) //quando houver uma mudança no form, ele ativa a função save()

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  if(nlwSetup.dayExists(today)){
    alert('Dia já incluso 🔴')
    return
  }
  alert('Adicionado com sucesso ✅')
  nlwSetup.addDay(today);
}

function save(){
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //pega os dados e guarda dentro do localStorage, sempre que houver mudança
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {} //pega os dados do localStorage e transforma em objeto, se ele estiver vazio, cria-se um objeto vazio
nlwSetup.setData(data);
nlwSetup.load();

/*const data = {
  run: ['01-01', '01 -02', '01-06', '01-07', '08-01'],
  takePills: ['01-03'],
  read: ['01-02']
}
marca o checkbox manualmente-->*/