import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import SelectComponent from './SelectComponent';

function Formulario() {
  const { handleSubmit, register, control, errors } = useForm();

  const onSubmit = (data) => {
    setUsuario({...usuario, newsletter: newsletter})
    setVisible(true)
  };

  const estadosBrasileiros = [
    { value: 'AC', label: 'Acre' },
    { value: 'AL', label: 'Alagoas' },
    { value: 'AP', label: 'Amapá' },
    { value: 'AM', label: 'Amazonas' },
    { value: 'BA', label: 'Bahia' },
    { value: 'CE', label: 'Ceará' },
    { value: 'ES', label: 'Espírito Santo' },
    { value: 'GO', label: 'Goiás' },
    { value: 'MA', label: 'Maranhão' },
    { value: 'MT', label: 'Mato Grosso' },
    { value: 'MS', label: 'Mato Grosso do Sul' },
    { value: 'MG', label: 'Minas Gerais' },
    { value: 'PA', label: 'Pará' },
    { value: 'PB', label: 'Paraíba' },
    { value: 'PR', label: 'Paraná' },
    { value: 'PE', label: 'Pernambuco' },
    { value: 'PI', label: 'Piauí' },
    { value: 'RJ', label: 'Rio de Janeiro' },
    { value: 'RN', label: 'Rio Grande do Norte' },
    { value: 'RS', label: 'Rio Grande do Sul' },
    { value: 'RO', label: 'Rondônia' },
    { value: 'RR', label: 'Roraima' },
    { value: 'SC', label: 'Santa Catarina' },
    { value: 'SP', label: 'São Paulo' },
    { value: 'SE', label: 'Sergipe' },
    { value: 'TO', label: 'Tocantints' },
    { value: 'DF', label: 'Distrito Federal' }
  ];

  const civil = [
    {value: 'S', label: "Solteiro"},
    {value: 'C', label: "Casado"},
    {value: 'V', label: "Viúvo"},
    {value: 'D', label: "Divorciado"}
  ]

  const genero = [
    {value: 'M', label: "M"},
    {value: 'F', label: "F"}

  ]

  const [newsletter, setNewsletter] = useState({esportes: "false", tecnologia: "false", automoveis: "false"})
  const [usuario, setUsuario] = useState({nomeCompleto: "", dataNascimento: "", cpf: "", celular: "", telefone: "", website: "",
  email: "", endereco: "", bairro: "", cidade: "", CEP: "", login: "", senha: "", newsletter: newsletter})
  const [visible, setVisible] = useState(false);

  return (
  <>   
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            <label style={{marginRight: 5}}>Nome Completo</label>
            <input
              value={ usuario && usuario.nomeCompleto }
              onChange={(event) => setUsuario({...usuario, nomeCompleto: event.target.value})}
              required={true}
              style={{border: usuario.nomeCompleto == "" ? '1px ff9999' : "" }}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Data de Nascimento</label>
            <input
              value={ usuario && usuario.dataNascimento }
              onChange={(event) => setUsuario({...usuario, dataNascimento: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>CPF</label>
            <input
              value={ usuario && usuario.cpf }
              onChange={(event) => setUsuario({...usuario, cpf: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Celular</label>
            <input
              value={ usuario && usuario.celular}
              onChange={(event) => setUsuario({...usuario, celular: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Telefone</label>
            <input
              value={ usuario && usuario.telefone}
              onChange={(event) => setUsuario({...usuario, telefone: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Website</label>
            <input
              value={ usuario && usuario.website}
              onChange={(event) => setUsuario({...usuario, website: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Sexo</label>
            <SelectComponent isGender={true} data={genero} />
          </div>
          <div>
            <label style={{marginRight: 5}}>Estado Civil</label>
            <SelectComponent isGender={false} data={civil} />
          </div>
        </fieldset>

        <fieldset>
          <legend>Dados de Contato</legend>
          <div>
            <label style={{marginRight: 5}}>E-mail</label>
            <input
              value={ usuario && usuario.email }
              onChange={(event) => setUsuario({...usuario, email: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Endereço</label>
            <input
              value={ usuario && usuario.endereco }
              onChange={(event) => setUsuario({...usuario, endereco: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Bairro</label>
            <input
              value={ usuario && usuario.bairro }
              onChange={(event) => setUsuario({...usuario, bairro: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Cidade</label>
            <input
              value={ usuario && usuario.cidade }
              onChange={(event) => setUsuario({...usuario, cidade: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>CEP</label>
            <input
              value={ usuario && usuario.CEP }
              onChange={(event) => setUsuario({...usuario, CEP: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>UF</label>
            <SelectComponent isGender={false} data={estadosBrasileiros}/>
          </div>
        </fieldset>

        <fieldset>
         <legend>Dados de Cadastro</legend>
         <div>
            <label style={{marginRight: 5}}>Login</label>
            <input
              value={ usuario && usuario.login }
              onChange={(event) => setUsuario({...usuario, login: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Senha</label>
            <input
              value={ usuario && usuario.senha }
              onChange={(event) => setUsuario({...usuario, senha: event.target.value})}
              required={true}
            />
          </div>
          <div>
            <label style={{marginRight: 5}}>Deseja receber informações sobre os seguintes assuntos abaixo:</label>
            <div>
              <input type="checkbox" value="tecnologia" onClick={(event) => {setNewsletter({...newsletter, tecnologia: event.target.checked ? 'true' : 'false'})}}  />Tecnologia
              <input type="checkbox" value="esportes" onClick={(event) => {setNewsletter({...newsletter, esportes: event.target.checked ? 'true' : 'false'})}} />Esportes
              <input type="checkbox" value="automoveis" onClick={(event) => {setNewsletter({...newsletter, automoveis: event.target.checked ? 'true' : 'false'})}} />Automóveis
            </div>
          </div>
          <div>
            <label style={{marginRight: 5}}>Li as regras de cadastro e autorizo a criação do usuário</label>
            <input
              value={ usuario && usuario.senha }
              onChange={(event) => setUsuario({...usuario, senha: event.target.value})}
              required={true}
            />
          </div>
        </fieldset>
        

          
          {/* <div>
            <label>CPF</label>
            <input
              type="text"
              name="cpf"
              {...control.register("cpf", { required: "Required" })}
            />
            {errors.cpf && <span>Campo obrigatório</span>}
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              {...control.register("email", { required: "Required" })}
            />
            {errors.email && <span>Campo obrigatório</span>}
          </div>
        </fieldset>

        <fieldset>
          <legend>Dados de Contato</legend>
          <div>
            <label>Endereço</label>
            <input
              type="text"
              name="endereco"
              {...control.register("endereco", { required: "Required" })}
            />
            {errors.endereco && <span>Campo obrigatório</span>}
          </div>
          <div>
            <label>Bairro</label>
            <input
              type="text"
              name="bairro"
              {...control.register("bairro", { required: "Required" })}
            />
            {errors.bairro && <span>Campo obrigatório</span>}
          </div>
          <div>
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
        {...control.register("cidade", { required: "Required" })}
            />
    S        {errors.cidade && <span>Campo obrigatório</span>}
          </div>
          <div>
            <label>UF</label>
            <Controller
              as={Select}
              name="uf"
              control={control}
              options={estadosBrasileiros}
            />
            {errors.uf && <span>Campo obrigatório</span>}
    </div> */}

        

      <button type="submit" onClick={() => { console.log(usuario)}}>Enviar</button>
      </form>
      {visible ? <h1>{usuario.nomeCompleto}</h1> : null }
    </>
  );
}

export default Formulario;