interface VerifyCEPResponse {
  isValid: boolean;
  erro?: string;
  data?:{
    uf: string;
    localidade: string;
  }
}

export async function verifyCEP(cep): Promise<VerifyCEPResponse> {
  cep = cep.replace(/\D/g, '');
  
  if (cep.length !== 8) {
    return { isValid: false, erro: 'CEP deve conter 8 dígitos' };
  }
  
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    
    if (data.erro) {
      
      return { isValid: false, erro: 'CEP não encontrado' };
    }
    
    return { isValid: true, data: { uf: data.uf, localidade:data.localidade } };
  } catch (error) {
    return { isValid: false, erro: 'Erro ao consultar CEP no sistema.' };
  }
}
