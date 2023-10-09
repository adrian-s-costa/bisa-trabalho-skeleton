import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import Select from 'react-select';
import SelectComponent from './SelectComponent';

function Formulario() {
  const { handleSubmit, register, control, errors } = useForm();

  const onSubmit = (data) => {
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
    {label: "S"},
    {label: "C"},
  ]


  const [usuario, setUsuario] = useState({nomeCompleto: "", document: ""})
  const [visible, setVisible] = useState(false);

  return (
  <>  
    
    <form onSubmit={handleSubmit(onSubmit)}>
        <fieldset>
          <legend>Dados Pessoais</legend>
          <div>
            <label style={{marginRight: 10 + 'em'}}>Nome Completo   </label>
            <input
              value={ usuario && usuario.nomeCompleto }
              onChange={(event) => setUsuario({...usuario, nomeCompleto: event.target.value})}
              required={true}
            />
          </div>

          <SelectComponent isGender={false} data={estadosBrasileiros}/>
          <SelectComponent isGender={true} data={civil} />
          
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

        </fieldset>

        <button type="submit">Enviar</button>
      </form>
      {visible ? <h1>{usuario.nomeCompleto}</h1> : null }
    </>
  );
}

export default Formulario;