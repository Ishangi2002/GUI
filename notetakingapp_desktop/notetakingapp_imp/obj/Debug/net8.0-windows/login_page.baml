   M S B A M L   `   `   `  ����L  Hnotetakingapp_imp, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null5clr-namespace:notetakingapp_impnotetakingapp_imp  5   	   "    notetakingapp_imp.login_page   5   	   W SPresentationCore, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35\ XPresentationFramework, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35e aSystem.Windows.Controls.Ribbon, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089R NWindowsBase, Version=8.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35F 9http://schemas.microsoft.com/winfx/2006/xaml/presentation     5   	   R NSystem.Xaml, Version=8.0.0.0, Culture=neutral, PublicKeyToken=b77a5c561934e089:x,http://schemas.microsoft.com/winfx/2006/xaml     5   	   @d2http://schemas.microsoft.com/expression/blend/2008     5   	   Jmc;http://schemas.openxmlformats.org/markup-compatibility/2006     5   	   1localclr-namespace:notetakingapp_imp     5   	     � Title$  
Login Page��5   	   $	��600��6   $	��900��6)   
������� � WindowState$ 	Maximized=�6H    � WindowStartupLocation$ CenterScreen=�5	   	   .��5
      �  � RowDefinitions 5   
   �� 5      $	��60* �6   �� 5      $
��Auto �6   $	��282��6*   �� 5      $	��88* �6    � ColumnDefinitions 5   
   �� 5      $	��50* �6   �� 5      $
��Auto �6   $	��395��6,   �� 5      $	��51* �6   .+�5   
   �� $��1��6    �� Padding$ 20q�5      
����������#D9DDDC$��1q�5      $	��310��5       �� CornerRadius$ 10��5      $��
0 150 0 20q�6#   $��2��67   ._�5      �� .+�5       �� $��Login��6   
���   �$��24(�5"      $��Poppins)�5#      $
��Left=�5$      $��	10,0,0,30q�5%      �� 5(      $ 5��6   ���#D9DDDC$��1q�5*      $��0,0,0,10q�5+      $��40��5,      ._�5-      �� -   5         ��Name$ txtEmail��5-      ���#909090$��14(�5/      
������ $��0q�51      $��Center=�52      $��Email��55      $
��10,0q�6+   56      �� 59      $ 5��6   ���#D9DDDC$��1q�5;      $��0,0,0,30q�5<      $��40��5=      ._�5>      �� -   5        $ txtPassword��5>      ���#909090$��14(�5@      
������ $��0q�5B      $��Center=�5C      $��Password��5F      $
��10,0q�6.   5G      �� 5J      -   5         ��Name$ btnLogin��5J      $��Login��5L      $��40��5M      $��14(�5N      
�������$��0,0,0,10q�5P      ��5Q      �� 5R      	 �� 
TargetType"	 ��6*   .R�5S      �� ���#7321A6$ 5��5T   %   ���#7321A6$��1q�5V   %   ._�5W   "   �� $��Center=�63   $��Center=�6P   5X      5Y      5[      �� 5^      
 �� Orientation$
 
Horizontal=�6   $��Center=�66   .+�5_      �� $��Not Registered Yet?��6   $��12(�5`      $��Center=�5a      �� 5b      $��5,0,0,0q�6    $��12(�61   $��Center=�6?   �� 5c      -   5        $��SignUp_page?�5c   $   .�6V   .�5d      �� $�Create an Account��6"   5e      5f      5g      5h      5i      5j      5k      