<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="WebApp.Login" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body style="margin:0;">
    <form id="form1" runat="server">
    <div>
        Email
        <asp:TextBox ID="EmailTextBox" runat="server"></asp:TextBox>
        Password
        <asp:TextBox ID="PasswordTextBox" runat="server"></asp:TextBox>
        <asp:Button ID="LoginButton" runat="server" Text="Login" />
        <asp:Button ID="SubscribeButton" runat="server" Text="Subscribe" />
    </div>
    </form>
</body>
</html>
