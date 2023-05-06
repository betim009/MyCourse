import { render, screen, waitFor } from '@testing-library/react';
import App from './App';
import TasksApi from './Components/TasksApi';

describe('Testa se Renderiza App', () => {
  test('renders "Tasks de programação" as an h2', () => {
    render(<App />);
    const h2 = screen.getByRole('heading', { level: 2, name: /Tasks de programação/i });
    expect(h2).toBeInTheDocument();
  });

  test("exibe uma lista de tarefas", () => {
    render(<App />);
    const list = screen.getByTestId("lista-1");
    expect(list).toBeInTheDocument();
  });

  test('exibe as tarefas corretas na lista', () => {
    render(<App />);
    const items = screen.getAllByRole('listitem');
    expect(items).toHaveLength(4);
    expect(items[0]).toHaveTextContent('HTML');
    expect(items[1]).toHaveTextContent('CSS');
    expect(items[2]).toHaveTextContent('React');
    expect(items[3]).toHaveTextContent('JSX');
  });

  test('Testa lista com forEach', () => {
    const tasks = [
      { id: 1, texto: "HTML" },
      { id: 2, texto: "CSS" },
      { id: 3, texto: "React" },
      { id: 4, texto: "JSX" },
    ];

    render(<App />);

    const list = screen.getByTestId("lista-1");
    expect(list).toBeInTheDocument();
    // Procura todos os itens da lista de tarefas
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems.length).toEqual(tasks.length);

    // Verifica se o texto de cada item da lista é igual ao texto da tarefa correspondente
    listItems.forEach((item, index) => {
      expect(item).toHaveTextContent(tasks[index].texto);
    });
  })
});


describe('Testa TasksApi', () => {
  test('renderiza a lista de tarefas', async () => {
    render(<TasksApi />);

    // Aguarda até que a lista de tarefas seja carregada na tela
    await waitFor(() => {
      const listaDeTarefas = screen.getByTestId("lista-2");
      expect(listaDeTarefas).toBeInTheDocument();
    });
  });
});


