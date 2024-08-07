import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "total-firestorer" is now active!');

	const disposable = vscode.commands.registerCommand('total-firestorer.helloWorld', () => {
		vscode.window.showInformationMessage('Hello World from total-firestorer!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {
	console.log('Deactivating.');
}
