import React from 'react';

const VALID_ROUTES = [
    'Home',
    'Points',
    'Details'
]

class NavigationService {

    /**
     * Retorna para a tela anterior.
     * Para executar esta função o front deve conter a importação:
     * import { useNavigation } from '@react-navigation/native';
     * Criar uma variável com o useNavigate
     * const navigation = useNavigation();
     * e passar o navigate como parâmetro
     */
    handleNativateBack(navigation: any): void {
        navigation.goBack();
    }


    /**
     * Função responsável pela navegação na aplicação.
     * @param navigation Recebe a navegação.
     * @param route Recebe o nome da rota.
     * Para executar esta função o front deve conter a importação:
     * import { useNavigation } from '@react-navigation/native';
     * Criar uma variável com o useNavigate
     * const navigation = useNavigation();
     * e passar o navigate como parâmetro
     */
    handleNavigate(navigation: any, route: string = 'Home', params: object = {}): void {
        // Etapa: Verifica se a rota é válida.
        if (!VALID_ROUTES.includes(route)) {
            return;
        }

        navigation.navigate(route, params);
    }
}

export default new NavigationService();